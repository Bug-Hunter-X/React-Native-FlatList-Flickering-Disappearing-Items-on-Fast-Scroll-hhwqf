# React Native FlatList Flickering/Disappearing Items

This repository demonstrates a common issue in React Native's FlatList component: item flickering or disappearance during fast scrolling, especially with large datasets.  The issue is reproduced in `bug.js`, and a solution is provided in `bugSolution.js`.

## Problem

The `bug.js` file contains a FlatList rendering a large number of items. Scrolling quickly causes items to briefly disappear or flicker, significantly impacting the user experience.

## Solution

The `bugSolution.js` file implements several optimizations to mitigate the flickering:

- **`keyExtractor`:** A unique key is assigned to each item, crucial for efficient list rendering.
- **`removeClippedSubviews`:** This prop improves performance by removing offscreen components.
- **`initialNumToRender`:** This increases the initial number of items rendered, reducing initial loading and subsequent flickering.
- **`windowSize`:**  Adjusting this value can improve performance when dealing with virtualized lists.

By applying these optimizations, the scrolling becomes smoother and the flickering is significantly reduced or eliminated.