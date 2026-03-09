import { useEffect } from "react";

interface SchemaMarkupProps {
  id: string;
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SchemaMarkup = ({ id, data }: SchemaMarkupProps) => {
  useEffect(() => {
    const scriptId = `schema-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [data, id]);

  return null;
};

export default SchemaMarkup;
