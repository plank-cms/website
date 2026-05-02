import { PlankRenderer } from "@plank-cms/react-renderer";
import type { NodeComponents, TiptapDoc } from "@plank-cms/react-renderer";
import { ArrowUpRightIcon } from "lucide-react";

const components: NodeComponents = {
  heading: ({ level, children }) => {
    const Tag = `h${level}` as "h1" | "h2" | "h3";
    const className =
      level === 1
        ? "text-3xl uppercase pt-4"
        : level === 2
          ? "text-2xl uppercase pt-4"
          : level === 3
            ? "text-xl uppercase pt-4"
            : undefined;
    return <Tag className={className}>{children}</Tag>;
  },
  link: ({ href, target, rel, children }) => (
    <a
      href={href}
      target={target ?? undefined}
      rel={rel ?? undefined}
      className="inline-flex items-center hover:font-bold"
    >
      {children}
      <ArrowUpRightIcon size={20} className="text-am-y shrink-0" />
    </a>
  ),
};

interface Props {
  content: string | TiptapDoc;
}

export function ProseRenderer({ content }: Props) {
  return <PlankRenderer content={content} components={components} />;
}
