import { writeFile } from "node:fs/promises";

const line = "When the pathologist lifted my wedding ring from the child's stomach, my wife squeezed my bare hand and whispered, 'Not this one either.'";

await writeFile("/output/entry.txt", line, "utf8");
