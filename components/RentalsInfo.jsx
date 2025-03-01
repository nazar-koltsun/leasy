import { cn } from '@/lib/utils';
import { useState } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import RentItemSelect from '@/components/RentItemSelect';

import StarIcon from '@/components/icons/StarIcon';
import MessageIcon from '@/components/icons/MessageIcon';

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-xl text-richBlack leading-[26px] font-light tracking-tight">
      {title}
    </h2>
  );
};

const ActionButton = ({ children }) => {
  return (
    <Button
      variant="flat"
      className="text-lg font-normal text-rhythm hover:underline"
    >
      {children}
    </Button>
  );
};

const DataField = ({ className, children }) => {
  return (
    <div
      className={cn(
        'h-9 border-2 border-[#ddd] rounded-lg px-3 py-1 text-darkLiver',
        className
      )}
    >
      {children}
    </div>
  );
};

const FieldLabel = ({ children }) => {
  return <p className="font-light text-richBlack tracking-tight">{children}</p>;
};

const RentalsInfo = ({ className, rentalsData, hideLenderDetails }) => {
  const selectOptions = rentalsData.rent_items.map((rental) => {
    return {
      id: rental.id,
      label: rental.label,
      image: rental.image,
    };
  });
  const [selected, setSelected] = useState(selectOptions[0]);

  const rental = rentalsData.rent_items.find(
    (rental) => rental.id === selected.id
  );

  return (
    <div className={className}>
      <Card>
        <div className="flex gap-6">
          <div className="w-1/2">
            <div>
              <div className="flex justify-between gap-4">
                <SectionTitle title="Przedmiot Wypożyczenia" />

                <ActionButton>
                  <StarIcon className="stroke-rhythm" /> Oceń Przedmiot
                  Wypożyczenia
                </ActionButton>
              </div>

              <RentItemSelect
                selected={selected}
                setSelected={setSelected}
                options={selectOptions}
                className="mt-2.5"
              />

              <div className="mt-5 grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <FieldLabel>Odbiór</FieldLabel>
                  <DataField>{rental.reception__address}</DataField>
                </div>

                <div className="space-y-2">
                  <FieldLabel>Zwrot</FieldLabel>
                  <DataField>{rental.return__address}</DataField>
                </div>

                <div className="space-y-2">
                  <FieldLabel>Data & Czas Odbioru</FieldLabel>
                  <div className="flex justify-between">
                    <DataField className="grow rounded-r-none text-black">
                      {rental.pickup_date}
                    </DataField>
                    <DataField className="w-[92px] rounded-l-none text-black ml-[-2px]">
                      {rental.pickup_time}
                    </DataField>
                  </div>
                </div>

                <div className="space-y-2">
                  <FieldLabel>Data & Czas Zwrotu</FieldLabel>
                  <div className="flex justify-between">
                    <DataField className="grow rounded-r-none text-black">
                      {rental.return_date}
                    </DataField>
                    <DataField className="w-[92px] rounded-l-none text-black ml-[-2px]">
                      {rental.return_time}
                    </DataField>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <SectionTitle title="Wartość Wypożyczeniap" />

              <div className="mt-4 space-y-[6px]">
                <div className="flex justify-between">
                  <DataField className="grow rounded-r-none text-black">
                    Wartość wypożyczenia
                  </DataField>
                  <DataField className="min-w-[192px] rounded-l-none text-black ml-[-2px]">
                    {rental.price_per_day}*{rental.rent_days} dni=
                    {rental.total_price}
                  </DataField>
                </div>

                <div className="flex justify-between">
                  <DataField className="grow rounded-r-none text-black">
                    Kaucja (zwrotna przy oddaniu)
                  </DataField>
                  <DataField className="min-w-[192px] rounded-l-none text-black ml-[-2px]">
                    {rental.deposit_price}
                  </DataField>
                </div>

                <div className="flex justify-between">
                  <DataField className="grow rounded-r-none text-black">
                    Suma do zapłaty
                  </DataField>
                  <DataField className="min-w-[192px] rounded-l-none text-black ml-[-2px]">
                    {rental.final_price}
                  </DataField>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <SectionTitle title="Metoda Płatności" />
              <p className="mt-1.5 p-2.5 w-[360px] max-w-full rounded-xl text-xs text-charlestonGreen bg-antiFlashWhite">
                Szczegóły dotyczące płatności ustala się bezpośrednio z
                właścicielem przedmiotu. Prosimy o kontakt z Wypożyczającym w
                celu ustalenia szczegółów.
              </p>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <SectionTitle title="Dane wynajmującego" />

              <div className="mt-3 space-y-[26px]">
                {[
                  rentalsData.tenant.name,
                  rentalsData.tenant.email,
                  rentalsData.tenant.phone,
                ].map((item, index) => (
                  <DataField key={index} className="text-sonicSilver">
                    {item}
                  </DataField>
                ))}
              </div>
            </div>

            <div className="mt-[19px]">
              <SectionTitle title="Dane wypożyczającego" />

              <div className="mt-3 space-y-[26px]">
                {[
                  rentalsData.lender.name,
                  rentalsData.lender.email,
                  rentalsData.lender.phone,
                ].map((item, index) => (
                  <DataField key={index} className="text-sonicSilver">
                    {item}
                  </DataField>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <ActionButton>
                <MessageIcon className="fill-rhythm" /> Napisz do właściciela
              </ActionButton>

              <ActionButton>
                <StarIcon className="stroke-rhythm" /> Oceń Współpracę z
                Wypożyczającym
              </ActionButton>
            </div>
          </div>
        </div>

        <Button
          onClick={hideLenderDetails}
          className="mt-8 mx-auto w-[280px] text-[15px] py-[7px] rounded-[5px]"
        >
          Wróć do listy
        </Button>
      </Card>
    </div>
  );
};

export default RentalsInfo;
