import { useCallback, useState } from "react";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModalStateChange = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal, setIsOpenModal]);

  return [isOpenModal, handleOpenModalStateChange];
};

export default useModal;
