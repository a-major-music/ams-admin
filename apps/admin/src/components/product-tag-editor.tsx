import { Product } from "@amm/types";
import TagChips from "./tag-chips";
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, Typography } from "@mui/material";
import _ from "lodash";
import { useState } from "react";
import ButtonWithConfirm from "./modal.confirm-dialog.component";

interface TagEditorProps {
    products: Product[]
    onDelete: (tags: string[]) => void
    onAdd: (tags: string[]) => void
}

const TagEditor = (props: TagEditorProps) => {
    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [newTags, setNewTags] = useState("");

    function _onDelete(s: string[]) {
        setSelectedTags(s);
        setConfirmDialogOpen(true);
    }

    function _onCancel() {
        setSelectedTags([]);
        setConfirmDialogOpen(false);
    }

    function _onOk() {
        setConfirmDialogOpen(false);
        props.onDelete(selectedTags);
        setSelectedTags([]);
    }

    function _onAdd() {
        props.onAdd(newTags.split(","));
        setNewTags("");
    }

    const tags = [...new Set( // Ensures uniqueness
        props.products.filter(p => !!p) // Remove any rogue null / undefined products in the array
        .flatMap(p => p.tags))] // Copy all tags to a single array
        .sort();

    return <Paper sx={{ backgroundColor: "#f0f0f0", p: 3 }}>
        <Typography variant="h3">Tag Editor</Typography>
        <Box sx={{ m: 3, p: 1, border: "dashed thin" }}>
            {!_.isEmpty(tags) && <TagChips
                tags={tags} // Sort the tags
                marginRight="1em"
                onDelete={_onDelete}
                size="medium"
            />}
            {_.isEmpty(tags) && <Typography variant="body2">There are currently no tags for the selected products</Typography>}
        </Box>

        <TextField         
            fullWidth 
            value={newTags} 
            onChange={(e) => setNewTags(e.target.value.toLowerCase().replace(/[^a-z0-9-,]/g, ""))}
            placeholder={"Enter new tags separated by comma..."}
            InputProps={{endAdornment: <ButtonWithConfirm 
                                            variant="contained" 
                                            color="secondary"
                                            disabled={_.isEmpty(newTags)}
                                            message={`This will add the new tags to ${
                                                props.products.length > 1 ? `all ${props.products.length} selected products.` 
                                                : "the selected product."}`}
                                            onOk={_onAdd}
                                        >Add</ButtonWithConfirm>}}/>

        <Dialog open={confirmDialogOpen}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
                {selectedTags.length === 1 && 
                    <DialogContentText>This will delete the tag <Chip label={selectedTags[0]} size="small"
                        color={selectedTags[0] === "sale" ? "error" : "info"} /> from {props.products.length > 1 ? " the selected products." : " the selected product."}
                    </DialogContentText>
                }
                {selectedTags.length > 1 &&
                    <DialogContentText>This will delete all tags from {props.products.length > 1 ? " the selected products." : " the selected product."}
                </DialogContentText>
            }
                <DialogActions>
                    <Button
                        onClick={_onCancel}
                        color="secondary"
                        variant="contained"
                        autoFocus
                    >
                        Cancel
                    </Button>
                    <div style={{ flex: "1 0 0" }} />
                    <Button
                        onClick={_onOk}
                        color="primary"
                        variant="contained"
                    >
                        Ok
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>

    </Paper>;
}

export default TagEditor;