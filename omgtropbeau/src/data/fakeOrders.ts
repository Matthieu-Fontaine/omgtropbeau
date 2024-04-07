let fakeOrders: any[] | PromiseLike<any[]>  = [];

for (let i = 12; i <= 25; i++) {
  fakeOrders.push({ id: i, customer: `Customer ${i}`, total: Math.random() * 100 });
}


function getFakeOrders(): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeOrders);
    }, 1000);
  });
}

export default getFakeOrders;