import { MovmentManager } from "./movment.js";

export function registerBoardClicks(scene, casePositions) {
  Object.entries(casePositions).forEach(([caseName, position]) => {
    const square = scene.getMeshByName(caseName);
    if (!square) return;
    square.isPickable = true;
    square.actionManager = new BABYLON.ActionManager(scene);
    square.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        () => MovmentManager.movePieceTo(position)
      )
    );
  });
}