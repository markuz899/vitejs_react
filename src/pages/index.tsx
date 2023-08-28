import Layout from "../container/Layout";
import { images } from "../config";
import { useEffect, useRef, useState } from "react";
import isMobile from "../hooks/isMobile";

const Home = () => {
  const [click, setClick] = useState(0);
  const [customImg, setCustomImg] = useState(null);
  const gridRef: any = useRef(null);
  const inputRef: any = useRef(null);
  const isSmall = isMobile();
  let old = 5;

  const handleCustomImages = (ev: any) => {
    setCustomImg(ev.target.value);
  };

  const handleSet = () => {
    inputRef.current.value = "";
    randomize(customImg);
    reload();
  };

  const randomize = (file?: any) => {
    let root = document.documentElement;
    let img = file || images[old];
    root.style.setProperty("--image", "url(" + img + ")");
    old++;
    if (old > 5) {
      old = 0;
    }
    let ul: any = gridRef.current.querySelectorAll("#puzz i");
    for (let i = 0; i < ul.length; i++) {
      ul[i].style.left = Math.random() * (window.innerWidth - 100) + "px";
      ul[i].style.top =
        Math.floor(Math.random() * (window.innerHeight - 100 - 100 + 1) + 100) +
        "px";
    }
    setClick(0);
    setCustomImg(null);
  };

  useEffect(() => {
    randomize();
    if (isSmall) {
      mobileFunc();
    }
  }, [gridRef]);

  const reload = () => {
    let done = gridRef.current.querySelectorAll(".done");
    done.forEach(function (e: any) {
      e.classList.toggle("done");
    });
    let dropped = gridRef.current.querySelectorAll(".dropped");
    dropped.forEach(function (e: any) {
      e.classList.toggle("dropped");
    });
    let allDone: any = gridRef.current.querySelector(".allDone");
    if (allDone) {
      allDone.style = "";
      allDone.classList.toggle("allDone");
    }
  };

  // mobile functionality
  const mobileFunc = () => {
    let p = gridRef.current.querySelectorAll("#puzz i");
    p.forEach(function (e: any) {
      e.addEventListener("mousedown", function () {
        setClick((prev) => prev + 1);
      });
      e.addEventListener("click", function () {
        if (gridRef.current.querySelector(".clicked")) {
          gridRef.current.querySelector(".clicked").classList.toggle("clicked");
          e.classList.toggle("clicked");
        } else {
          e.classList.toggle("clicked");
        }
      });
    });

    let fp = gridRef.current.querySelectorAll("#puz i");
    fp.forEach(function (el: any) {
      el.addEventListener("click", function () {
        if (gridRef.current.querySelector(".clicked")) {
          let c: any = gridRef.current.querySelector(".clicked");
          if (c.classList.contains(el.classList)) {
            el.classList.add("dropped");
            c.classList.add("done");
            c.classList.toggle("clicked");

            if (gridRef.current.querySelectorAll(".dropped").length == 9) {
              gridRef.current.querySelector("#puz").classList.add("allDone");
              gridRef.current.querySelector("#puz").style.border = "none";
              gridRef.current.querySelector("#puz").style.animation =
                "allDone 1s linear forwards";

              setTimeout(function () {
                reload();
                randomize();
              }, 1500);
            }
          }
        }
      });
    });
  };

  // desktop drag and drop
  const allowDrop = (ev: any) => {
    ev.preventDefault();
  };

  const drag = (ev: any) => {
    ev.dataTransfer.setData("text", ev.target.className);
    setClick((prev) => prev + 1);
  };

  const drop = (ev: any) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");

    if (ev.target.className == data) {
      ev.target.classList.add("dropped");
      gridRef.current
        .querySelector("." + data + "[draggable='true']")
        .classList.add("done");

      if (gridRef.current.querySelectorAll(".dropped").length == 9) {
        gridRef.current.querySelector("#puz").classList.add("allDone");
        gridRef.current.querySelector("#puz").style.border = "none";
        gridRef.current.querySelector("#puz").style.animation =
          "allDone 1s linear forwards";

        setTimeout(function () {
          reload();
          randomize();
        }, 1500);
      }
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center w-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Custom image"
          className="input input-bordered w-full max-w-xs"
          onChange={handleCustomImages}
        />
        <button className="btn btn-primary ml-3" onClick={handleSet}>
          {customImg == "" || !customImg ? "RANDOM" : "SET"}
        </button>
      </div>
      <div>
        <div id="puz_box" ref={gridRef}>
          <div id="puz">
            <i className="first" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="secon" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="third" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="fourt" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="fifth" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="sixth" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="seven" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="eight" onDrop={drop} onDragOver={allowDrop}></i>
            <i className="ninth" onDrop={drop} onDragOver={allowDrop}></i>
          </div>
          <div id="puzz">
            <i className="third" draggable="true" onDragStart={drag}></i>
            <i className="first" draggable="true" onDragStart={drag}></i>
            <i className="secon" draggable="true" onDragStart={drag}></i>
            <i className="fourt" draggable="true" onDragStart={drag}></i>
            <i className="fifth" draggable="true" onDragStart={drag}></i>
            <i className="sixth" draggable="true" onDragStart={drag}></i>
            <i className="seven" draggable="true" onDragStart={drag}></i>
            <i className="eight" draggable="true" onDragStart={drag}></i>
            <i className="ninth" draggable="true" onDragStart={drag}></i>
          </div>
        </div>
        <div id="clicks">Finish in - {click}</div>
      </div>
    </Layout>
  );
};

export default Home;
