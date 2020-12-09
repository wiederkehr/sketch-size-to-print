import sketch from "sketch";

export default function () {
  const document = sketch.fromNative(context.document);
  const selection = document.selectedLayers;
  selection.map((layer) => {
    const PXtoMM = 2.833333;
    var frame = layer.frame;
    var copy = layer.duplicate();
    copy.frame.x = frame.x + frame.width + 100;
    copy.frame.width = frame.width * PXtoMM;
    copy.frame.height = frame.height * PXtoMM;
    copy.name = layer.name + "_print";
    selection.clear();
    copy.selected = true;
  });
}
