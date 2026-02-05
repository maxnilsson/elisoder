import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "dyulh476", // Ditt ID
  dataset: "production",
  useCdn: true, // Sätt till true för snabbare laddning (cache), false om du vill se ändringar direkt
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}