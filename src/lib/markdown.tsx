import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  // bold **x**, italic *x*, code `x`
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|~~[^~]+~~)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const t = m[0];
    if (t.startsWith("**")) parts.push(<strong key={k++}>{t.slice(2, -2)}</strong>);
    else if (t.startsWith("~~")) parts.push(<s key={k++}>{t.slice(2, -2)}</s>);
    else if (t.startsWith("`")) parts.push(<code key={k++}>{t.slice(1, -1)}</code>);
    else parts.push(<em key={k++}>{t.slice(1, -1)}</em>);
    last = m.index + t.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function renderMarkdown(md: string): ReactNode[] {
  const lines = md.split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith("# ")) { out.push(<h1 key={key++}>{inline(line.slice(2))}</h1>); i++; continue; }
    if (line.startsWith("## ")) { out.push(<h2 key={key++}>{inline(line.slice(3))}</h2>); i++; continue; }
    if (line.startsWith("### ")) { out.push(<h3 key={key++}>{inline(line.slice(4))}</h3>); i++; continue; }
    if (line.startsWith("> ")) { out.push(<blockquote key={key++}>{inline(line.slice(2))}</blockquote>); i++; continue; }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i].trim().slice(1, -1).split("|").map((c) => c.trim());
        if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
        i++;
      }
      const [head, ...body] = rows;
      out.push(
        <div key={key++} className="overflow-x-auto">
          <table>
            <thead><tr>{head.map((c, ci) => <th key={ci}>{inline(c)}</th>)}</tr></thead>
            <tbody>{body.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci}>{inline(c)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      continue;
    }
    if (/^(-|\*) /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^(-|\*) /.test(lines[i])) { items.push(lines[i].slice(2)); i++; }
      out.push(<ul key={key++}>{items.map((it, ii) => <li key={ii}>{inline(it)}</li>)}</ul>);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, "")); i++; }
      out.push(<ol key={key++}>{items.map((it, ii) => <li key={ii}>{inline(it)}</li>)}</ol>);
      continue;
    }
    out.push(<p key={key++}>{inline(line)}</p>);
    i++;
  }
  return out;
}
