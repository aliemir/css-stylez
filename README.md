# css-stylez

A tiny js module to make it easier to use css modules.

## Installation

```bash
npm install css-stylez
```

## How to use

First, import the package and a transformer function (or you can create one for yourself, camelToKebab function is basically some match regex and replace)

```js
import cssStylez, {camelToKebab} from 'css-stylez'
```

Let's say we import our css module styles like

```js
import styles from './MyComponent.module.scss'
```

We need to initialize cssStylez as,

```js
const stylez = cssStylez(styles,camelToKebab)
```

Finally,we can start using it. I created this package because I love css modules but hated using it with bulma. You basically end up with classnames hell, ugly af.

```html
<div className={stylez.isFlexTabletOnly}>
stuff here
</div>

<div className={stylez.hasTextGreyDarker}>
stuff here
</div>
```
