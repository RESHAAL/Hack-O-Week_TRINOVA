# 📊 Kaggle Sensor Data Cleaning

## 📌 Overview

This project focuses on cleaning and preprocessing air quality sensor data from a Beijing dataset. The data includes hourly measurements of pollutants (PM2.5, PM10, CO, etc.) and weather conditions.

The goal is to make the dataset reliable for analysis by handling missing values and reducing the effect of outliers.

## 📂 Dataset

* Time-based sensor readings (year, month, day, hour)
* Air pollutants: PM2.5, PM10, SO2, NO2, CO, O3
* Weather data: Temperature, Pressure, Dew Point, Rain
* Wind: Direction and Speed

## ⚙️ Data Cleaning Steps

### 1. Missing Values

* Found missing values in multiple sensor columns (e.g., PM2.5, CO)
* Applied **linear interpolation** to fill gaps while preserving trends in time-series data

### 2. Outlier Handling (PM2.5)

* Used the **IQR method** to detect extreme values
* Applied **capping (Winsorization)** instead of removing data points
* Prevents distortion while keeping the dataset intact

## 📈 Visualization

* **Boxplot**: Shows reduction of extreme values
* **Density Plot**: Compares distribution before and after cleaning

## 💾 Output

The cleaned dataset is exported as:

```
cleaned_beijing_sensors.csv
```

## 🛠️ Tech Stack

* Python
* pandas, numpy
* matplotlib, seaborn


## 🚀 How to Run

1. Install dependencies:

   ```
   pip install pandas numpy matplotlib seaborn
   ```
2. Place the dataset in your project folder
3. Run the script to clean and export the data

## 📌 Summary

* Missing values handled using interpolation
* Outliers reduced using IQR-based capping
* Dataset is now ready for analysis or machine learning

