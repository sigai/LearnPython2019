from docx import Document

document = Document("test.docx")

print(dir(document))
for paragraph in document.paragraphs:
    print(paragraph.text)