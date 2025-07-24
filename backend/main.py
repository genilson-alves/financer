from fastapi import FastAPI
import yfinance as yf

app = FastAPI()


@app.get("/")
def read_root():
    return {"Test", "Test", "Test..."}


@app.get("/stock/{ticker}")
def get_stock_data(ticker: str):
    stock = yf.Ticker(ticker)
    return stock.info


@app.get("/news/{ticker}")
def get_company_news(ticker: str):
    stock = yf.Ticker(ticker)
    return stock.news
