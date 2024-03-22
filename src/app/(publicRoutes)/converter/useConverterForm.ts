import { useEffect, useState, useRef, useCallback } from "react";
import {
  fetchCurrencies,
  fetchExchangeRate,
  fetchHistoricalExchangeRate,
  ICurrency,
} from "@/server-actions/getData";
import { getFormattedDate } from "@/utils/getFormattedDate";

export default function useConverterForm() {
  const today = getFormattedDate();
  const sevenDaysBeforeToday = getFormattedDate(-7);

  const [currencies, setCurrencies] = useState<ICurrency[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<ICurrency | null>(
    null
  );
  const [selectedBuyCurrency, setSelectedBuyCurrency] =
    useState<ICurrency | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(today);

  const exchangeAmountInputRef = useRef<HTMLInputElement>(null);
  const buyAmountInputRef = useRef<HTMLInputElement>(null);

  const oldExchangeAmountInputValue = useRef(0);
  const oldBuyAmountInputValue = useRef(0);

  useEffect(() => {
    async function getCurrencies() {
      try {
        const { response } = await fetchCurrencies();
        setCurrencies(response);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    }
    getCurrencies();
  }, []);

  useEffect(() => {
    if (currencies && currencies.length > 0) {
      const uahCurrency = currencies.find(
        ({ short_code }) => short_code === "UAH"
      );
      const usdCurrency = currencies.find(
        ({ short_code }) => short_code === "USD"
      );

      uahCurrency && setSelectedCurrency(uahCurrency);
      usdCurrency && setSelectedBuyCurrency(usdCurrency);
    }
  }, [currencies]);

  useEffect(() => {
    async function getExchangeRate() {
      try {
        if (selectedCurrency && selectedBuyCurrency) {
          const { rates } = await (selectedDate === today
            ? fetchExchangeRate(
                selectedCurrency.short_code,
                selectedBuyCurrency.short_code
              )
            : fetchHistoricalExchangeRate(
                selectedCurrency.short_code,
                selectedBuyCurrency.short_code,
                selectedDate
              ));

          const rate = rates[selectedBuyCurrency.short_code];
          const exchangeAmountInputValue =
            exchangeAmountInputRef.current?.value;
          if (exchangeAmountInputValue !== undefined && !isNaN(rate)) {
            const calculatedAmount =
              parseFloat(exchangeAmountInputValue) * rate;
            if (!isNaN(calculatedAmount)) {
              buyAmountInputRef.current!.value = calculatedAmount
                .toFixed(2)
                .toString();

              oldExchangeAmountInputValue.current =
                +exchangeAmountInputRef.current!.value;
              oldBuyAmountInputValue.current =
                +buyAmountInputRef.current!.value;
            }
          }
          setExchangeRate(rate);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getExchangeRate();
  }, [selectedCurrency, selectedBuyCurrency, selectedDate, today]);

  const calculateBuyAmount = useCallback(() => {
    const exchangeAmountInputValue = exchangeAmountInputRef.current?.value;
    if (exchangeAmountInputValue !== undefined && exchangeRate !== null) {
      const calculatedAmount =
        parseFloat(exchangeAmountInputValue) * exchangeRate;
      if (!isNaN(calculatedAmount)) {
        buyAmountInputRef.current!.value = calculatedAmount
          .toFixed(2)
          .toString();
      }
    }
  }, [exchangeRate]);

  useEffect(() => {
    calculateBuyAmount();
  }, [calculateBuyAmount]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const oldValue =
      event.target === exchangeAmountInputRef.current
        ? oldExchangeAmountInputValue.current
        : oldBuyAmountInputValue.current;
    const newValue = event.target.value;

    if (!newValue) {
      event.target.value = oldValue.toString();
    }

    oldExchangeAmountInputValue.current =
      +exchangeAmountInputRef.current!.value;
    oldBuyAmountInputValue.current = +buyAmountInputRef.current!.value;
  };

  const handleExchangeAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e);
      calculateBuyAmount();
    },
    [calculateBuyAmount]
  );

  const handleBuyAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleInputChange(e);
      const buyAmount = parseFloat(e.target.value);
      if (!isNaN(buyAmount) && exchangeRate !== null) {
        const calculatedExchangeAmount = buyAmount / exchangeRate;
        if (!isNaN(calculatedExchangeAmount)) {
          exchangeAmountInputRef.current!.value = calculatedExchangeAmount
            .toFixed(2)
            .toString();
        }
      }
    },
    [exchangeRate]
  );

  const handleSelectedDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSelectedCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === selectedBuyCurrency?.short_code) {
      setSelectedBuyCurrency(selectedCurrency);
    }

    setSelectedCurrency({
      short_code: e.target.value,
      name: e.target.selectedOptions[0].getAttribute("data-name")!,
    });
  };

  const handleSelectedBuyCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target.value === selectedCurrency?.short_code) {
      setSelectedCurrency(selectedBuyCurrency);
    }

    setSelectedBuyCurrency({
      short_code: e.target.value,
      name: e.target.selectedOptions[0].getAttribute("data-name")!,
    });
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: (task3) Add result to history array
  }, []);

  return {
    currencies,
    selectedCurrency,
    selectedBuyCurrency,
    exchangeRate,
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
  };
}
