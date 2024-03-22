"use client";

import React from "react";
import Button from "@/components/Button/Button";
import Input from "@/components/FormElems/Input";
import Label from "@/components/FormElems/Label";
import Select from "@/components/FormElems/Select";
import ArrowsSVG from "@/components/SVGIcons/ArrowsSVG";
import useConverterForm from "./useConverterForm";

export default function ConverterForm() {
  const {
    currencies,
    selectedCurrency,
    selectedBuyCurrency,
    selectedDate,
    exchangeAmountInputRef,
    buyAmountInputRef,
    today,
    sevenDaysBeforeToday,
    handleExchangeAmountChange,
    handleBuyAmountChange,
    handleSubmit,
    handleSelectedCurrencyChange,
    handleSelectedBuyCurrencyChange,
    handleSelectedDateChange,
  } = useConverterForm();

  return (
    <form className="flex justify-between items-center" onSubmit={handleSubmit}>
      <div>
        <fieldset className="mb-6">
          <legend className="mb-8">
            <Label htmlFor="exchangeAmount">В мене є:</Label>
          </legend>
          <div className="flex gap-4">
            <Input
              type="number"
              id="exchangeAmount"
              defaultValue={1000}
              ref={exchangeAmountInputRef}
              onChange={(e) => handleExchangeAmountChange(e)}
            />

            <Select
              value={selectedCurrency?.short_code}
              onChange={(e) => handleSelectedCurrencyChange(e)}
            >
              {currencies.map(({ short_code, name }) => (
                <option key={short_code} value={short_code} data-name={name}>
                  {short_code}
                </option>
              ))}
            </Select>
          </div>
        </fieldset>
        <Input
          type="date"
          value={selectedDate}
          max={today}
          min={sevenDaysBeforeToday}
          onChange={(e) => handleSelectedDateChange(e)}
        />
      </div>

      <ArrowsSVG className="-translate-y-3" />

      <div className="flex flex-col">
        <fieldset className="mb-6">
          <legend className="mb-8">
            <Label htmlFor="buyAmount">Хочу придбати:</Label>
          </legend>
          <div className="flex gap-4">
            <Input
              type="number"
              id="buyAmount"
              ref={buyAmountInputRef}
              onChange={(e) => handleBuyAmountChange(e)}
            />
            <Select
              value={selectedBuyCurrency?.short_code}
              onChange={(e) => handleSelectedBuyCurrencyChange(e)}
            >
              {currencies.map(({ short_code, name }) => (
                <option key={short_code} value={short_code} data-name={name}>
                  {short_code}
                </option>
              ))}
            </Select>
          </div>
        </fieldset>
        <Button type="submit" className="self-end">
          Зберегти результат
        </Button>
      </div>
    </form>
  );
}
