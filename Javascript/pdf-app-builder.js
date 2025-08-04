window.onload = function() {
    window.jsPDF = window.jspdf.jsPDF;
    var doc = jsPDF();

    var findTextWidth = function(text, fontSize) {
        var textWidth = doc.getTextDimensions(text, {
            fontSize: fontSize
        }).w
        return textWidth;
    }

    var generateBtn = document.getElementById("generate-btn");
    generateBtn.onclick = function(){
        // doc.setFontSize(34);
        // doc.setFont("Arial Rounded MT", "italic", "bold");
        // doc.text("CodeWorld",10,20);
        
        var pageWidth = doc.internal.pageSize.width;
        var imageWidth = 40;
        var imageHeight = 40;
        var center = (pageWidth - imageWidth)/2;
        
        doc.addImage('/Image/d.jpg', 'JPG', center, 4, imageWidth, imageHeight); //doc.addImage('image path', 'extension like PNG/JPG', leftMargin, topmargin, imageWidth, imageHeight)
        
        var textWidth = findTextWidth("Codeworld", 34);
        var textLeftMargin = (pageWidth-textWidth)/2;
        doc.setFontSize(34);
        doc.text("Codeworld", textLeftMargin, 60);

        var tagline = "A CodesWorld Institute Branches for Coding Education";
        var taglineSize = 17;
        var taglineLeftMargin = findTextWidth(tagline, taglineSize);
        var taglineLeftMargin = (pageWidth-taglineWidth)/2;
        doc.setFontSize(taglineSize);
        doc.text(tagline, taglineLeftMargin, 70);

        doc.save("code.pdf");
    }

    //Export table to pdf
    var tableBtn = document.getElementById("table-btn");
    tableBtn.onclick = function(){
        doc.autoTable({html:'#report'});
        doc.save("table.pdf");
    }
}