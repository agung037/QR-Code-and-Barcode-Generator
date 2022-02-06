let qr=new QRCode("result");
qr.makeCode("Hello World");

JsBarcode("#barcode", "Hello World");

$("#text").on("input", () => {
  qr.makeCode($("#text").val())
  JsBarcode("#barcode", $("#text").val());
});