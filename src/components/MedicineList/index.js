import React from 'react';

const MedicineList = ({ medicines }) => (
  medicines.map(briefMedicineInfo => {
    return (
      <div>{`${briefMedicineInfo.name} (${briefMedicineInfo.ingredients.map(ingredient => {
        return (
          ingredient.strength + " " + ingredient.unit
        );
      })} ${briefMedicineInfo.dosage_form})`}</div>
    );
  })
);

export default MedicineList;
