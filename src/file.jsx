<Container>
      <Row className="justify-content-center">
        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>PHOTO DE LA DEGRADATION</h3>

          <Button variant="contained" component="label">
            Upload <PhotoCamera />
            <input
              hidden
              onChange={(e) => setLoadingUpload(e.target.files[0])}
              multiple
              type="file"
            />
          </Button>
        </Col>
        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>LOCALITATION GPS</h3>

          <Button onClick={locationH}>
            Position <AddLocationIcon />{" "}
          </Button>
        </Col>

        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>ROUTE</h3>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="entrer le numéro de la route "
              variant="outlined"
              name="route"
              onChange={(e) => setRoute(e.target.value)}
            />
          </Box>
        </Col>

        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Choisir cas </h3>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">choisir</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typed}
                label="TypeD"
                onChange={handleChange}
              >
                {listdescas.map((el) => (
                  <MenuItem value={el}>{el}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Col>

        {/* fuck */}
        {typed ? (
          <Col
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              margin: "10px",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>Choisir cas parmi {typed}</h3>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">choisir</InputLabel>
                {typed === "chaussée" ? (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typedd}
                    label="chaussée"
                    onChange={handleChangedeux}
                  >
                    {chaussée.map((el) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                ) : typed === "pont" ? (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typedd}
                    label="pont"
                    onChange={handleChangedeux}
                  >
                    {pont.map((el) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                ) : typed === "danger" ? (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typedd}
                    label="danger"
                    onChange={handleChangedeux}
                  >
                    {danger.map((el) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                ) : (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typedd}
                    label="ralenti"
                    onChange={handleChangedeux}
                  >
                    {ralenti.map((el) => (
                      <MenuItem value={el}>{el}</MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            </Box>
          </Col>
        ) : null}
        {/* end fuck */}
        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>OBSERVATION</h3>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextareaAutosize
              style={{ width: 250, height: 250 }}
              id="outlined-basic"
              label="entrer votre observation "
              variant="outlined"
              name="obs"
              onChange={(e) => setObs(e.target.value)}
            />
          </Box>
        </Col>
        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {msg ? <div className="box">{msg}</div> : ""}
        </Col>

        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={handelFinish} style={{ width: 250 }}>
            {" "}
            Envoyé
          </Button>
        </Col>
      </Row>
    </Container>