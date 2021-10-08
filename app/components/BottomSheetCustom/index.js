import React, { useMemo } from "react"
import BottomSheet, { BottomSheetView, BottomSheetBackdrop, useBottomSheetDynamicSnapPoints } from '@gorhom/bottom-sheet';

export default BottomSheetCustom = props => {
    const snapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

    let { 
        bottomSheetRef,
        handleSheetChanges,
        sheetViewStyles,
        children
    } = props;

    const {
        animatedHandleHeight,
        animatedSnapPoints,
        animatedContentHeight,
        handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(snapPoints);

    return (
        <BottomSheet
            index={-1}
            ref={bottomSheetRef}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            contentHeight={animatedContentHeight}
            onChange={handleSheetChanges}
            backdropComponent={(backdropProps) => (
                <BottomSheetBackdrop
                    {...backdropProps}
                    enableTouchThrough={true}
                    appearsOnIndex={0}
                    disappearsOnIndex={-1}
                    closeOnPress={true}
                />
            )}
        >
            <BottomSheetView
                style={sheetViewStyles}
                onLayout={handleContentLayout}
            >
                {children}
            </BottomSheetView>
        </BottomSheet>
    )
}