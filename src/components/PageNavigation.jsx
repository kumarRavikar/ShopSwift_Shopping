import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ title }) => {
  return (
    <div style={{ 
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "16px",
      marginBottom: "16px"
    }}>
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
          color: "#2563eb",
          fontWeight: "500"
        }}
      >
        Home
      </NavLink>

      <span style={{ color: "#6b7280" }}>/</span>

      <span style={{
        color: "#111827",
        fontWeight: "600"
      }}>
        {title}
      </span>
    </div>
  )
}

export default PageNavigation
