import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer JRgeJpWwgoxoGpzdl9mR3MmfpxoxJvfLDr-WoSTHM5uDlrl4aXuB1h07uNFlfD-NmIow3NhclgNjJqFUJINIVVqUftpfzE4YoZcmv9GBEw1fVMIG4j2bOG4AEO-mXnYx'
  }
})
