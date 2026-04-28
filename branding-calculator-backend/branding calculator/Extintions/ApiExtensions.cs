using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using YamalBrand.Infrastructure;

namespace branding_calculator.Extintions
{
    public static class ApiExtensions
    {
        public static void AddApiAuthentication(this IServiceCollection services,
            JwtOptions jwtOptions)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
                {
                    options.TokenValidationParameters = new()
                    {
                        ValidateIssuer = false,
                        ValidateAudience = false,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(jwtOptions.SecretKey))
                    };

                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            context.Token = context.Request.Cookies["MegaCookies"];

                            return Task.CompletedTask;
                        }
                    };
                });

            services.AddAuthorization(option =>
            {
                option.AddPolicy("AdminPolicy", policy =>
                {
                    policy.RequireClaim("Admin", "true");
                });
            });
        }
    }
}
