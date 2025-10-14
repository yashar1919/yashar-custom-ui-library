# Yashar UI

کتابخانه UI شخصی ساخته شده با React + TypeScript + Vite

## نصب

```bash
npm install yashar-ui
```

## استفاده

```jsx
import { Button } from "yashar-ui";
import "yashar-ui/style.css";

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert("سلام!")}>
        کلیک کن
      </Button>
    </div>
  );
}
```

## کامپوننت‌ها

### Button

کامپوننت دکمه با انواع مختلف و اندازه‌های مختلف

#### Props

| Prop       | Type                                                | Default     | Description       |
| ---------- | --------------------------------------------------- | ----------- | ----------------- |
| `variant`  | `'primary' \| 'secondary' \| 'danger' \| 'success'` | `'primary'` | نوع دکمه          |
| `size`     | `'small' \| 'medium' \| 'large'`                    | `'medium'`  | اندازه دکمه       |
| `disabled` | `boolean`                                           | `false`     | غیرفعال کردن دکمه |
| `onClick`  | `(event: MouseEvent) => void`                       | -           | تابع کلیک         |
| `children` | `ReactNode`                                         | -           | محتوای داخل دکمه  |

#### مثال‌ها

```jsx
// دکمه‌های مختلف
<Button variant="primary">اولیه</Button>
<Button variant="secondary">ثانویه</Button>
<Button variant="danger">خطر</Button>
<Button variant="success">موفقیت</Button>

// اندازه‌های مختلف
<Button size="small">کوچک</Button>
<Button size="medium">متوسط</Button>
<Button size="large">بزرگ</Button>

// دکمه غیرفعال
<Button disabled>غیرفعال</Button>
```

## Development

برای توسعه و کار روی این library:

```bash
# نصب dependencies
npm install

# اجرای dev mode
npm run dev

# build کردن library
npm run build:lib

# lint کردن کد
npm run lint
```

## License

MIT
