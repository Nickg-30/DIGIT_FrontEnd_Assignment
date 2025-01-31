import React from "react";
import { Card } from "@egovernments/digit-ui-react-components";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const DocViewerWrapper = ({ uploadedFile = {}, showDownloadOption = true, docWidth = "262px", docHeight = "206px" }) => {
  if (!uploadedFile) {
    return <p>No document uploaded</p>;
  }

  console.debug("up", JSON.parse(JSON.stringify(uploadedFile)))

  const filePreviewUrl = URL.createObjectURL(uploadedFile);

  return (
    <div className="docviewer-wrapper" id="docviewer-id">
      <Card>
        <DocViewer
          className="docViewer-image"
          documents={[{ uri: filePreviewUrl, fileName: uploadedFile.name }]}
          pluginRenderers={DocViewerRenderers}
          style={{ width: docWidth, height: docHeight }}
          theme={{
            primary: "#F47738",
            secondary: "#feefe7",
            tertiary: "#feefe7",
            textPrimary: "#0B0C0C",
            textSecondary: "#505A5F",
            disableThemeScrollbar: true,
          }}
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: true,
            },
            pdfZoom: {
              defaultZoom: 1.1,
              zoomJump: 0.2,
            },
            pdfVerticalScrollByDefault: true, // false as default
          }}
        />
      </Card>

      {showDownloadOption && (
        <a
          href={filePreviewUrl}
          download={uploadedFile.name}
          style={{ display: "block", marginTop: "10px", color: "#007E7E", textDecoration: "none", fontWeight: "bold" }}
        >
          {uploadedFile.name}
        </a>
      )}
    </div>
  );
};

export default DocViewerWrapper;
