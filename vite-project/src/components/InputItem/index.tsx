interface InputItemProps {
    label: string;
    placeholder: string;
    required: boolean;
    type: string
}

const InputItem:React.FC<InputItemProps> = ({label, placeholder, required = true, type}) => {
  return (
    <div className="flex flex-col mb-5 w-4/5">
      <label className="font-bold text-sm py-1">{label}
        {required ? <span className='text-red-600'> *</span> : ''}
      </label>
      <input
        required = {required}
        type= {type}
        placeholder = {placeholder}
        className="p-2 w-full text-sm outline-none border-solid border-2 border-slate-200 rounded-md placeholder:text-sm"
      />
    </div>
  );
};

export default InputItem;
