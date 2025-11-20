import AllSports from "./AllSports";
import TermsPrivacy from "./TermsPrivacy";

export default function Settings() {
  return (
    <div className="p-5 md:p-10 space-y-7">
      {/* header  */}
      {/* <div className="flex justify-end w-full">
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="default"
          className="w-48"
        >
          Add Sports
        </Button>
      </div> */}

      <AllSports />
      <TermsPrivacy />

      {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <CreateSportsType setIsModalOpen={setIsModalOpen} />
      </Modal> */}
    </div>
  );
}
