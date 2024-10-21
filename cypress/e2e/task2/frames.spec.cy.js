import FramePage from "../../page_object/task2/FramePage";

describe('iFrames', () => {
    it('iFrame', () => {
        const framePage = new FramePage();
        framePage.basePage();
        framePage.navigateToFrame();
        framePage.getFrameText().should("contain", "Your content goes here.");
    });
});