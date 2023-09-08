import StoreList from "../components/Store/StoreList";

function Store() {
  return (
    <div className="Store" style={{border: "solid 2px red"}}>
      <div>Im Store</div>
      <StoreList />
    </div>
  );
}

export default Store;