import { useState, useEffect } from "react";
import VolumeSelectionModal from "../drink_modals/VolumeSelectionModal";
import DrinkVolumeList from "./drink_volume_components/DrinkVolumeList";
import DrinkVolumeInput from "./drink_volume_components/DrinkVolumeInput";
import SelectionButton from "../drink_buttons/SelectionButton";
import { iconComponents } from "../drink_utilities/iconMapping";
import { defaultVolumes } from "../drink_utilities/defaultData";

const DrinkVolume = ({ selectedVolume, setSelectedVolume }) => {
  const [showModal, setShowModal] = useState(false);
  const [volumes, setVolumes] = useState(() => {
    const savedVolumes = localStorage.getItem("volumesList");
    return savedVolumes ? JSON.parse(savedVolumes) : defaultVolumes;
  });

  useEffect(() => {
    localStorage.setItem("volumesList", JSON.stringify(volumes));
  }, [volumes]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const renderIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <>
      <SelectionButton
        openModal={openModal}
        title={
          selectedVolume ? (
            <div className="flex items-center text-sm text-[#000000]">
              {`Selected: `}
              <span className="flex flex-row items-center ml-1 gap-1 text-xs text-[#1CABE3] font-normal">
                {renderIcon(selectedVolume.iconName)}
                {selectedVolume.name}
                {` ml`}
              </span>
            </div>
          ) : (
            "Set Volume"
          )
        }
      />
      <VolumeSelectionModal show={showModal} onClose={closeModal}>
        <div className="flex flex-col justify-center py-4 items-center font-manrope font-medium bg-[#EEF8FB] rounded-lg max-h-[80vh]">
          <DrinkVolumeList
            volumes={volumes}
            selectedVolume={selectedVolume}
            setSelectedVolume={setSelectedVolume}
            iconComponents={iconComponents}
          />
          <DrinkVolumeInput volumes={volumes} setVolumes={setVolumes} />
        </div>
      </VolumeSelectionModal>
    </>
  );
};

export default DrinkVolume;
