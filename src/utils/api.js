const API_URL = "http://localhost:3000"

export const API = {
    getPortfolios: () => fetch(`${API_URL}/portfolios`).then(res => res.json()),
    getPortfolioByID: (id) => fetch(`${API_URL}/portfolios/${id}`).then(res => res.json()),
    postPortfolios: (data) => fetch(`${API_URL}/portfolios`, {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    }),
}