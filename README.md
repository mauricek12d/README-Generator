# 📘 README Generator


A command-line application that dynamically generates a professional `README.md` file based on user input using Node.js and Inquirer.js. This tool helps developers streamline documentation by producing consistent, clean, and informative project READMEs with ease.


## 🔧 Table of Contents


- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## ✅ Features


- Interactive CLI using **Inquirer.js**
- Automatically generates a complete `README.md` file
- Prompts include:
 - Project Title
 - Description
 - Installation Instructions
 - Usage Guidelines
 - Contribution Instructions
 - Testing Information
 - License Selection (MIT, Apache, GPL, etc.)
 - GitHub Username and Email
- Auto-generates license badge at the top


## 📦 Installation


To install and set up the project locally:


```bash
git clone https://github.com/mauricek12d/README-Generator.git
cd README-Generator
npm install

```


## 🚀 Usage


To generate a new `README.md`, simply run:


```bash
node index.js
```


Follow the CLI prompts. The generated README file will appear in the root directory (or as configured).


## 🎥 Demo


![Demo Screenshot](./assets/screenshot.png)


👉 *(Optional)* Add a walkthrough video here: 
[Watch the demo](#)


## 🛠️ Technologies Used


- [Node.js](https://nodejs.org/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- JavaScript (ES6)
- Git & GitHub


## 📁 Folder Structure


```
README-Generator/
├── assets/                  # Screenshots, demo images
├── index.js                 # CLI logic
├── utils/
│   └── generateMarkdown.js  # Markdown template logic
├── package.json
└── README.md
```


## 🤝 Contributing


Contributions are welcome! 

To contribute:


1. Fork the repository 
2. Create a feature branch (`git checkout -b feature/YourFeature`) 
3. Commit your changes (`git commit -m 'Add feature'`) 
4. Push to GitHub (`git push origin feature/YourFeature`) 
5. Submit a Pull Request


## 📄 License


This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.


## 📬 Contact


**Maurice Zuniga** 
🔗 [LinkedIn](https://www.linkedin.com/in/maurice-zuniga424/) 
💻 [GitHub](https://github.com/mauricek12d) 
📧 [YourEmail@example.com]


> ✨ Created with care to help developers ship faster and document better.

