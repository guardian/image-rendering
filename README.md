# image-rendering

Handles parsing images from CAPI and rendering them in the `*-rendering` projects

## Components

### `BodyImage`

This used for images in the body of articles.

```js
<BodyImage
    image={Image}
    format={Format}
    supportsDarkMode={boolean}
    lightbox={Option<Lightbox>}
    caption={Option<ReactNode>}
/>
```

### `FigCaption`

```js
<FigCaption
    format={Format}
    supportsDarkMode={boolean}
    children={Option<ReactNode>}
/>
```

### `Img`

Lowest-level implementation of a responsive image.

```js
<Img
    image={Image}
    sizes={Sizes}
    className={Option<SerializedStyles>}
    format={Format}
    supportsDarkMode={boolean}
    lightbox={Option<Lightbox>}
/>
```

## Storybook

You can get storybook to run locally by running:

```
yarn storybook
```
