# Bill of Lading (BOL) Generator

## Overview

The Bill of Lading (BOL) Generator is a script that automates the process of filling out BOL documents based on a BOL template PDF file and a set of field-value pairs. The script uses PyPDF2, a Python library for working with PDF files, to update the form fields in the template PDF with the provided values and generate individual BOL PDF files.

## Prerequisites

Python 3.x
PyPDF2 library (pip install PyPDF2)
Jupyter Notebook

## How to Use
1. Clone the repository: git clone https://github.com/username/repository.git.
2. Navigate to the project directory: cd repository.
3. Install the required dependencies: pip install PyPDF2.
4. Run the Jupyter Notebook: jupyter notebook.
5. Open the provided Jupyter Notebook file (script.ipynb) in the Jupyter Notebook interface.
6. Run the code cells in the notebook to generate the BOL PDF files.

## What is a Bill of Lading (BOL)?

A Bill of Lading (BOL) is a legal document issued by a carrier or transport company that provides details about a shipment of goods. It serves as a receipt of the goods, evidence of the contract of carriage, and a document of title. The BOL contains important information such as the shipper's and consignee's names and addresses, the description of the goods, the terms and conditions of the shipment, and more. The BOL plays a crucial role in the logistics and transportation industry as it serves as a key document for tracking and transferring ownership of goods.

## Script Structure

The script consists of two main components: the Jupyter Notebook (script.ipynb) and the Node.js server (index.js).

## Jupyter Notebook (script.ipynb)

The Jupyter Notebook contains the Python code for generating BOL PDF files based on the provided BOL template PDF and field-value pairs. Here's a breakdown of the code:

### Import the required libraries:
```
from PyPDF2 import PdfReader, PdfWriter
import requests as req
```

### Define the function that fills out the pdf:
```
def fill_out_bol(fileName, dict):
    file = '../assets/BOL Template.pdf'
    pdf_writer = PdfWriter()
    pdf_reader = PdfReader(file)
    page = pdf_reader.pages[0]
    pdf_writer.add_page(page)
    pdf_writer.update_page_form_field_values(pdf_writer.pages[0], dict)
    with open(f"../assets/{fileName}.pdf", "wb") as output_stream:
        pdf_writer.write(output_stream)
```
### Retrieve the field-value pairs from the server:
```
fake_data = req.get('http://localhost:8080/generated-bol')
fake_data_test = fake_data.json()
```

### Iterate over the retrieved data and generate BOL PDF files:
```
for list in fake_data_test:
    file_name = list['Carrier Name']
    fill_out_bol(file_name, list)
```

## Node.js server (index.js)

The Node.js server is responsible for serving the generated BOL data and running on port 8080. Here's an explanation of the code:

### Installation

1. Make sure you have Node.js installed on your system.
2. Clone the repository: `git clone https://github.com/username/repository.git`.
3. Navigate to the project directory: `cd repository`.
4. Install the required dependencies: `npm install`.

### Usage

1. Start the server: `npm start`.
2. The server will be running at `http://localhost:8080`.

### Code Explanation

#### Generate fake BOL data using the Chance library:
```
const chance = new Chance();
var lastNames = ['Carriers', 'Trucking', 'Transport'];

const BOL = [...Array(250).keys()].map(id => {
    var randomWord = lastNames[Math.floor(Math.random() * lastNames.length)];

    return {
        id,
        "Carrier Name": chance.last() + ' ' + randomWord,
        // Other fields...
    }
});
```

### Create an endpoint to serve the generated BOL data:
```
app.get('/generated-bol', (req, res) => {
    res.send(BOL);
});
```

### Start the server and listen on port 8080:
```
app.listen(8080, () => console.log('Listening on port http://localhost:8080'));
```


## Conclusion

The provided code showcases a streamlined process for generating BOL PDF files by filling out predefined form fields with fake data. This approach can be extended to automate various paper-based processes that involve PDF documents. By leveraging libraries like PyPDF2 and Chance, developers can easily adapt the code to generate and fill out PDF forms for different purposes, such as invoices, contracts, or reports. Future development efforts should focus on enhancing the functionality by incorporating PDF reading capabilities. This would enable the system to extract data from existing PDF files, further automating document processing workflows and increasing efficiency. By combining PDF generation and reading capabilities, this approach can serve as a foundation for developing comprehensive PDF automation solutions for a wide range of industries and use cases.
