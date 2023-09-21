import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 29.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 49.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Access to fitness classes",
            "Sauna access",
            "Locker room access"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 99.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access",
            "Up to four family members included"
          ]
        },
        {
          "id": 4,
          "name": "Student Discount",
          "price": 19.99,
          "features": [
            "Access to cardio machines",
            "Access to weightlifting area",
            "Locker room access",
            "Valid student ID required"
          ]
        }
      ];
      


    return (
        <div>
            <h2 className="text-5xl">BestPrices</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;