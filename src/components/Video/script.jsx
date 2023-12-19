export const simulateSpacebarPress = () => {
    const spacePressEvent = new KeyboardEvent('keydown', {
      key: ' ',
      code: 'Space',
      keyCode: 32,
      which: 32,
      bubbles: true,
    });
    document.dispatchEvent(spacePressEvent);
}

