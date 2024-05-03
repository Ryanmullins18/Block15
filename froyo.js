const froyoOrder = prompt (
    "Strawberry Vanilla or coffee only",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee",
)
// const getFroyoOrder = userInputString.split(",");
// const froyoOrder = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]

function getFroyoOrder(flavors) {
    const vFlavor = [];
    const cFlavor = [];
    const sFlavor = [];
    
    for (let i = 0; i < flavors.length; i++) {
     const flavor = flavors[i];
      if (flavor[0] === "s") { 
        sFlavor.push(flavor);
      }
      if (flavor[0] === "v") { 
        vFlavor.push(flavor);
      }
      if (flavor[0] === "c") { 
        cFlavor.push(flavor);
      }
    }
    return {
        vanilla: vFlavor.length,
        strawberry: sFlavor.length,
        coffee: cFlavor.length,
    };
  }
  console.log(getFroyoOrder(froyoOrder))