# 📌 Searchable Dropdown Component

A highly customizable and feature-rich dropdown component with search, portal support, multiple selections, and more.

## ✨ Features

- 🔍 **Searchable Dropdown**: Implements a search feature within the dropdown.
- 📌 **Portal Support**: Supports rendering inside or outside a portal.
- 🔄 **Single & Multiple Selection**: Choose between selecting a single or multiple options.
- 🎨 **Customizable Option Rendering**: Allows customization of how each option is displayed.
- 🔎 **Search Filtering**: Efficiently filters long lists into relevant options.
- ⚙️ **Toggle Features**: Enable or disable individual features like search.
- 🏗 **Z-Index Compatibility**: Ensures proper visibility with high `z-index` elements.

---

## 🚀 Installation

```bash
git clone https://github.com/manggiperdana/dropdown-component
npm install
```

---

## 📖 Usage

```tsx
import {Dropdown} from "@components/Forms/Dropdown";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" }
];

function App() {
  return (
    <Dropdown
      options={options}
      searchable
      multiple
      portal
      renderOption={(option) => <strong>{option.label}</strong>}
    />
  );
}
```

---

## 🧪 Running Tests

Ensure all tests pass to maintain quality:

```bash
npm test
```

---

## 📖 Storybook

Run Storybook to visualize and test components interactively:

```bash
npm run storybook
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

