/**
 *
 * @param boxHeight height of box
 * @param boxWidth width of box
 * @returns vertical and horizontal Gap
 */
export const useGapBox = (boxHeight: number, boxWidth: number): [number, number] => {
    const gapVertical = boxHeight * 2;
    const gapHorizontal = boxWidth + 10;
    return [gapVertical, gapHorizontal];
};
