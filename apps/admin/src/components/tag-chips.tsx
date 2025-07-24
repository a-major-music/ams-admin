import { Chip } from "@mui/material";

interface TagChipsProps {
  tags: string[];
  marginRight?: string;
  onDelete?: (tags: string[]) => void;
  size?: "small" | "medium";
}

export default function TagChips(props: TagChipsProps) {
  return (
    <>
      {props.tags &&
        props.tags.map((t) => (
          <Chip
            label={t}
            size={props.size || "small"}
            color={t === "sale" ? "error" : "info"}
            sx={{ marginRight: props.marginRight || "0.2em" }}
            onDelete={props.onDelete ? () => props.onDelete([t]) : undefined}
          />
        ))}
      {props.onDelete && props.tags.length > 1 && (
        <Chip
          label={"delete all"}
          size={props.size || "small"}
          color={"error"}
          sx={{ marginRight: props.marginRight || "0.2em" }}
          onDelete={() => props.onDelete(props.tags)}
        />
      )}
    </>
  );
}
