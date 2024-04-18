import CreateEditProduct from "../components/CreateEditProduct";
import Header from "../components/Header";
import Modal from "../components/Modal";
import PhoneItemsGrid from "../components/PhoneItemsGrid";
const Homepage = () => {
  return (
    <div className="w-full h-screen min-h-[100vh] font-mono">
      <Header />
      <div className="w-[80%] mx-auto mt-6">
        <aside className="w-full flex items-center justify-end">
          <Modal>
            <Modal.Open name="add">
              <button className="px-8 py-3 bg-gray-900 text-gray-50 rounded-lg">
                Add Product
              </button>
            </Modal.Open>
            <Modal.Window windowName="add">
              <CreateEditProduct />
            </Modal.Window>
          </Modal>
        </aside>
        <PhoneItemsGrid />
      </div>
    </div>
  );
};

export default Homepage;
