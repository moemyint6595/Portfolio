using GlobalShared.Services;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MyPortfolio.Shared.Services;
using MyPortfolio.Web.Client.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Add device-specific services used by the MyPortfolio.Shared project
builder.Services.AddSingleton<IFormFactor, FormFactor>();
builder.Services.AddScoped<JsInterop>();

await builder.Build().RunAsync();
