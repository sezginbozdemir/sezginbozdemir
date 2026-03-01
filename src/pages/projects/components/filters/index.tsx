import IconButton from "@/components/ui/icon-button";
import { Group } from "@mantine/core";
import { IoFilterOutline } from "react-icons/io5";
import {
  MdOutlineCheckCircle,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";

const ProjectFilters = ({
  selectedType,
  handleType,
  projectTypes,
}: {
  selectedType: string;
  handleType: (type: string) => void;
  projectTypes: Set<string>;
}) => {
  function getIcon(type: string) {
    const Icon =
      type === selectedType
        ? MdOutlineCheckCircle
        : MdOutlineRadioButtonUnchecked;

    return Icon;
  }

  return (
    <Group mt={50}>
      <IoFilterOutline size={20} color="var(--white)" />
      <IconButton
        icon={getIcon("All")}
        onClick={() => handleType("All")}
        label="All"
      />
      {[...projectTypes].map((type: string) => (
        <IconButton
          icon={getIcon(type)}
          onClick={() => handleType(type)}
          label={type}
          key={type}
        />
      ))}
    </Group>
  );
};
export default ProjectFilters;
