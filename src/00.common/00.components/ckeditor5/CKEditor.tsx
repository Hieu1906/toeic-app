import { CKEditor } from "@ckeditor/ckeditor5-react";
import { debounce } from "lodash";
import React from "react";
import styles from "./ckeditor.module.scss";
import ClassicEditor from "ckeditor-custom/build/ckeditor";
const colors = [
  { color: "#330000" },
  { color: "#331900" },
  { color: "#333300" },
  { color: "#193300" },
  { color: "#003300" },
  { color: "#003319" },
  { color: "#003333" },
  { color: "#001933" },
  { color: "#000033" },
  { color: "#190033" },
  { color: "#330033" },
  { color: "#330019" },
  { color: "#000000" },
  { color: "#660000" },
  { color: "#663300" },
  { color: "#666600" },
  { color: "#336600" },
  { color: "#006600" },
  { color: "#006633" },
  { color: "#006666" },
  { color: "#003366" },
  { color: "#000066" },
  { color: "#330066" },
  { color: "#660066" },
  { color: "#660033" },
  { color: "#202020" },
  { color: "#990000" },
  { color: "#994C00" },
  { color: "#999900" },
  { color: "#4C9900" },
  { color: "#009900" },
  { color: "#00994C" },
  { color: "#009999" },
  { color: "#004C99" },
  { color: "#000099" },
  { color: "#4C0099" },
  { color: "#990099" },
  { color: "#99004C" },
  { color: "#404040" },
  { color: "#CC0000" },
  { color: "#CC6600" },
  { color: "#CCCC00" },
  { color: "#66CC00" },
  { color: "#00CC00" },
  { color: "#00CC66" },
  { color: "#00CCCC" },
  { color: "#0066CC" },
  { color: "#0000CC" },
  { color: "#6600CC" },
  { color: "#CC00CC" },
  { color: "#CC0066" },
  { color: "#606060" },
  { color: "#FF0000" },
  { color: "#FF8000" },
  { color: "#FFFF00" },
  { color: "#80FF00" },
  { color: "#00FF00" },
  { color: "#00FF80" },
  { color: "#00FFFF" },
  { color: "#0080FF" },
  { color: "#0000FF" },
  { color: "#7F00FF" },
  { color: "#FF00FF" },
  { color: "#FF007F" },
  { color: "#808080" },
  { color: "#FF3333" },
  { color: "#FF9933" },
  { color: "#FFFF33" },
  { color: "#99FF33" },
  { color: "#33FF33" },
  { color: "#33FF99" },
  { color: "#33FFFF" },
  { color: "#3399FF" },
  { color: "#3333FF" },
  { color: "#9933FF" },
  { color: "#FF33FF" },
  { color: "#FF3399" },
  { color: "#A0A0A0" },
  { color: "#FF6666" },
  { color: "#FFB266" },
  { color: "#FFFF66" },
  { color: "#B2FF66" },
  { color: "#66FF66" },
  { color: "#66FFB2" },
  { color: "#66FFFF" },
  { color: "#66B2FF" },
  { color: "#6666FF" },
  { color: "#B266FF" },
  { color: "#FF66FF" },
  { color: "#FF66B2" },
  { color: "#C0C0C0" },
  { color: "#FF9999" },
  { color: "#FFCC99" },
  { color: "#FFFF99" },
  { color: "#CCFF99" },
  { color: "#99FF99" },
  { color: "#99FFCC" },
  { color: "#99FFFF" },
  { color: "#99CCFF" },
  { color: "#9999FF" },
  { color: "#CC99FF" },
  { color: "#FF99FF" },
  { color: "#FF99CC" },
  { color: "#E0E0E0" },
  { color: "#FFCCCC" },
  { color: "#FFE5CC" },
  { color: "#FFFFCC" },
  { color: "#E5FFCC" },
  { color: "#CCFFCC" },
  { color: "#CCFFE5" },
  { color: "#CCFFFF" },
  { color: "#CCE5FF" },
  { color: "#CCCCFF" },
  { color: "#E5CCFF" },
  { color: "#FFCCFF" },
  { color: "#FFCCE5" },
  { color: "#FFFFFF" },
];

interface CKEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

type Editor = { getData: () => string };

export class CKEditor5 extends React.PureComponent<CKEditorProps> {
  private editor!: Editor;

  private onChange = debounce(() => {
    this.props.onChange && this.props.onChange(this.editor.getData());
  }, 200);

  render() {
    return (
      <div style={{ width: "100%" }} className={styles.ckeditor}>
        <CKEditor
          config={{
            toolbar: [
              "alignment:left",
              "alignment:center",
              "alignment:right",
              "alignment:justify",
              "|",
              "bold",
              "italic",
              "underline",
              "fontcolor",
              "fontsize",
              "indent",
              "outdent",
              "|",
              "link",
              "imageUpload",
              "blockQuote",
              "bulletedList",
              "numberedList",
              "inserttable",
              "|",
              "mediaEmbed",
              "undo",
              "redo",
            ],
            image: {
              resizeOptions: [],
              toolbar: [
                "imageTextAlternative",
                "|",
                "imageStyle:alignLeft",
                "imageStyle:full",
                "imageStyle:alignRight",
                "|",
              ],
              styles: ["full", "alignLeft", "alignRight"],
            },
            mediaEmbed: {
              previewsInData: true,
            },
            table: {
              contentToolbar: [
                "tableColumn",
                "tableRow",
                "mergeTableCells",
                "tableProperties",
                "tableCellProperties",
              ],
              tableCellProperties: {
                borderColors: colors,
                backgroundColors: colors,
                columns: 13,
              },
              tableProperties: {
                borderColors: colors,
                backgroundColors: colors,
                columns: 13,
              },
            },
            fontColor: {
              colors,
              columns: 13,
            },
            fontBackgroundColor: {
              colors,
              columns: 13,
            },
          }}
          editor={ClassicEditor}
          onInit={(editor: Editor) => {
            this.editor = editor;
          }}
          data={this.props.value || ""}
          disabled={this.props.disabled}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
