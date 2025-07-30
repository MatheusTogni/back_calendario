import pool from '../db';

const ministracoesController = {
  async addMinistracao(params: any) {
    try {
      const sql = `INSERT INTO "MINISTRACOES" ("TITULO_MINISTRACAO", "DATA_MINISTRACAO", "DESCRICAO_MINISTRACAO", "USER_MINISTRACAO", "COR_MINISTRACAO")
                   VALUES ($1, $2, $3, $4, $5)
                   RETURNING *;`

      const values = [
        params.name,
        params.date,
        params.description,
        params.people,
        params.color
      ]

      await pool.query(sql, values);

    } catch (error) {
      console.error("Erro ao inserir a ministração:", error);
      throw error;
    }
  },

  async getMinistracoes() {
    try {
      const sql = `SELECT * FROM "MINISTRACOES";`

      const resp = await pool.query(sql);

      return resp.rows
    } catch (error) {
      console.error("Erro ao buscar as ministrações", error);
      throw error;
    }
  },

  async deleteMinistracao(params: any) {
    try {
      const sql = `DELETE FROM "MINISTRACOES"
                    WHERE "ID_MINISTRACAO" = $1`

      const values = [
        params.id,
      ]

      await pool.query(sql, values);

    } catch (error) {
      console.error("Erro ao deletar a ministração:", error);
      throw error;
    }
  },

  async updateMinistracao(params: any) {
    try {
      const sql = `UPDATE "MINISTRACOES"
                      SET "TITULO_MINISTRACAO" = $1,
                      "DATA_MINISTRACAO" = $2,
                      "DESCRICAO_MINISTRACAO" = $3,
                      "USER_MINISTRACAO" = $4,
                      "COR_MINISTRACAO" = $5
                    WHERE "ID_MINISTRACAO" = $6`
      const values = [
        params.event.name,
        params.event.date,
        params.event.description,
        params.event.people,
        params.event.color,
        params.event.id
      ]

      await pool.query(sql, values);

    } catch (error) {
      console.error("Erro ao editar a ministração:", error);
      throw error;
    }
  },
};

export default ministracoesController;