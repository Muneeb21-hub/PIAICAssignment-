function order_sandwich(...items: string[]): void {
    console.log(`You ordered a sandwich with ${items.join(", ")}.`);
  }
  
  order_sandwich("lettuce", "tomato", "mayonnaise");
  order_sandwich("turkey", "cheese", "mustard", "lettuce");
  order_sandwich("peanut butter", "jelly");