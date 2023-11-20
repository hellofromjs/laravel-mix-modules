const form = () => {
    return `
        <div class="form-group mb-3">
            <input type="text" class="form-control city" placeholder="Miestas" value="Kaunas">
        </div>
        <div class="form-group mb-3">
            <input type="text" class="form-control term" placeholder="Jusu adresas" value="Saukstu gatve 2">
        </div>
        <div class="form-group mb-3">
            <input type="text" class="form-control result" readonly>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Ieškoti</button>
        </div>
    `
}

export default form;