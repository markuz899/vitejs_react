import { useLocale } from "../hooks/useLocale";

export default function SwitchLanguage({ onChange }: any) {
  const [language, handleChange] = useLocale("it");

  const change = (ev: any) => {
    onChange();
    handleChange(ev);
  };

  return (
    <label className="swap ">
      <input type="checkbox" checked={language === "it"} onChange={change} />

      <svg
        className="swap-on fill-current w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 83 83"
      >
        <linearGradient
          id="a"
          x1="-155.7"
          x2="-77.3"
          y1="-85.7"
          y2="-85.7"
          gradientTransform="rotate(-90 12 -88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#64ba46" />
          <stop offset="1" stop-color="#64ba46" />
        </linearGradient>
        <path fill="url(#a)" d="M0 41c0 19 12 34 28 40V2C12 8 0 23 0 41z" />
        <linearGradient
          id="b"
          x1="-67.1"
          x2="-38.8"
          y1="-80.2"
          y2="-80.2"
          gradientTransform="translate(122 122)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ed2224" />
          <stop offset="1" stop-color="#e61e25" />
        </linearGradient>
        <path fill="url(#b)" d="M83 41C83 23 71 8 54 2v79c17-6 29-21 29-40z" />
        <path fill="#F9F9F9" d="M41 0 28 2v79a41 41 0 0 0 26 0V2L41 0z" />
      </svg>
      <svg
        className="swap-off fill-current w-7 h-7"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "none" }}
      >
        <path
          d="m225 1h52l7 3v214l215 1 2 5v54l-3 6h-214l-1 215-4 2h-58l-3-3v-214l-215-1-2-4v-55l3-6h214l1-215z"
          fill="#d80329"
        />
        <path
          d="m284 499v-215h214l-6 33-2-1h-123l-4 1 2 2 84 84-7 9a29191 29191 0 0 0 -97-96h-28l4 5 101 101 6 6-25 21-87-86v129l-4 2-23 5-1 2h-1z"
          fill="#efeeef"
        />
        <path d="m501 224-2-6-7-33c-6-16-11-32-18-47-7-13-16-26-25-39a1526 1526 0 0 0 -37-39l-9-6c-10-7-19-15-29-21a258 258 0 0 0 -70-27l-20-3-6-2h223zm-498-6-2 5v-222h224l-7 2-12 2-21 5c-22 6-42 14-61 26l-25 17-26 22-13 15-8 9c-14 19-26 39-34 61l-8 26zm439 194 7-9c13-16 23-32 30-50l13-36a2506 2506 0 0 0 9-38v222h-213l1-2 23-5 4-2 28-9c22-8 41-20 59-34l25-22zm-224 87 2 2h-219v-222l2 5 7 33 3 10c5 19 14 36 23 52 5 9 11 16 17 24l11 15 11 10 16 14 8 6 2 3c18 14 38 25 60 33l25 8zm65 0c2 0 3 1 3 2h-7z" />
        <path
          d="m10 316-7-32h215v214l-32-6v-128l-2-1-3 4-78 78-4 3-8-6 92-92 3-4v-29l-3 2-106 106-2 3-11-10-11-15 86-87z"
          fill="#efeeef"
        />
        <path
          d="m186 10 20-5 12-2v215h-214l6-32h129l-2-3-84-84 7-9 86 87c6 7 12 10 21 9h18l-1-2-107-107-4-2 26-22 87 86zm306 175 7 33h-215v-214a228 228 0 0 1 32 6v128l3 2 2-5 77-77 5-4c3 2 6 3 8 6l-89 89c-4 4-6 8-6 15v21l2-1 107-107 2-4 22 26-84 85-1 2h124z"
          fill="#efefef"
        />
        <path
          d="m492 317-13 36c-7 18-17 34-29 50l-85-84-2-2 4-1a166317 166317 0 0 1 125 1zm-89 132c-18 14-37 26-59 34l-27 9-1-129z"
          fill="#0253b5"
        />
        <path d="m442 412-14 15-6-5-101-101-4-5h28l4 2z" fill="#d80229" />
        <path
          d="m492 185-4 1h-124l1-2 84-85c9 13 18 26 25 39 7 15 12 31 18 47zm-89-131-5 4-77 77-2 5-3-2v-128c20 5 40 13 58 23 10 6 19 14 29 21z"
          fill="#0253b5"
        />
        <path
          d="m427 73-2 4-107 107-2 1v-21c0-7 2-11 6-15l90-89z"
          fill="#d9062c"
        />
        <path
          d="m52 99 85 84 2 3h-128l7-26c8-22 20-42 34-61zm133-89 1 129-87-86 25-17c19-12 39-20 61-26z"
          fill="#0253b5"
        />
        <path
          d="m73 75 4 2 107 107 1 2h-18c-9 1-15-2-21-9l-86-87z"
          fill="#d9062b"
        />
        <path
          d="m99 448 4-3 78-78 3-4 2 1v128l-25-8a246 246 0 0 1 -62-36zm-89-131 129-1-86 87c-6-8-12-15-17-24a245 245 0 0 1 -26-62z"
          fill="#0253b5"
        />
        <path d="m75 428 2-3 106-106 3-2v29l-3 4-92 92z" fill="#d80329" />
      </svg>
    </label>
  );
}
