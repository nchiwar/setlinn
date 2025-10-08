import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"; // Assuming standard shadcn/ui import path

// A reusable component to structure the label and the Select input
function FormSelect({ label, placeholder, options, defaultValue }) {
  return (
    <div className="flex flex-col flex-1 min-w-[150px]">
      <label className="text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>

      <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-full bg-gray-100 p-3 rounded-lg border border-gray-200 h-auto">
          {/* This component displays the currently selected value */}
          <SelectValue
            placeholder={placeholder}
            className="font-medium text-gray-800"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function FindCityForm() {
  const cityOptions = [
    { label: "Lagos", value: "lagos" },
    { label: "Berlin", value: "berlin" },
    { label: "Munich", value: "munich" },
    { label: "Frankfurt", value: "frankfurt" },
  ];

  const roleOptions = [
    { label: "Student", value: "student" },
    { label: "Professional", value: "professional" },
    { label: "Alumnus", value: "alumnus" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
      {/* City Select */}
      <FormSelect
        label="City"
        placeholder="Select a city..."
        options={cityOptions}
        defaultValue="lagos" // Sets initial value to Lagos
      />

      {/* Role Select */}
      <FormSelect
        label="I am a...."
        placeholder="Select your role..."
        options={roleOptions}
        defaultValue="student" // Sets initial value to Student
      />
    </div>
  );
}
export default FindCityForm;
