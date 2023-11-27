import PhoneCard from "./PhoneCard";

const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className="py-10">
            <h1 className="text-2xl text-center">All Categories Phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    phones?.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;